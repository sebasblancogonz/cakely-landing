# Flutter Engineer - Project Memory

## Project Overview
Cakely Flutter app: admin panel + user-facing dashboard for bakery management SaaS.
Working directory base: `E:/personal-projects/cakely/flutter/lib/`

## State Management
Uses **Bloc/Cubit** (not Riverpod). Every feature has its own bloc under `presentation/bloc/`.
Pattern: sealed event + state classes, one Bloc per feature/screen.

## Project Structure
```
lib/
├── features/
│   └── <feature>/
│       ├── data/
│       │   ├── datasources/    # Remote datasource (HTTP)
│       │   └── models/         # Equatable data models with fromJson
│       └── presentation/
│           ├── bloc/           # Bloc, Event, State files
│           └── pages/
└── shared/
    └── widgets/
```

## Model Conventions
- All models extend `Equatable` from `package:equatable/equatable.dart`
- `factory ClassName.fromJson(Map<String, dynamic> json)` factory constructor
- Date parsing: `DateTime.tryParse(json['field']?.toString() ?? '')` (never throws)
- Number parsing: `(json['field'] as num?)?.toDouble() ?? 0` or `.toInt() ?? 0`
- String fields: `json['field'] as String? ?? ''`
- Bool fields: `json['field'] as bool? ?? false`
- Dynamic/polymorphic fields: `json['field']` typed as `dynamic`
- Maps from JSON (e.g. status breakdowns): iterate with `.forEach` into typed `Map<String, int>`
- `props` list uses discriminating fields only (id, status, etc.) - not every field
- No `toJson` required on read-only admin models; include it on mutable domain models

## Admin Feature Models
Located at: `features/admin/data/models/`
- `admin_metrics_model.dart` - Platform totals, SaaS metrics, plan distribution, trends
- `admin_revenue_model.dart` - MRR history, ARPU, NRR, churn, billing cycle breakdown
- `admin_engagement_model.dart` - Activity rates, feature adoption, payment methods, team roles
- `admin_retention_model.dart` - Cohort retention, health scores, time-to-value, churn trend
- `admin_error_model.dart` - Error logs, list response + metrics response (two API views)
- `admin_user_model.dart` - User list (paginated), user detail with team memberships
- `admin_business_model.dart` - Business list summary, business detail with team + owner

## Key Patterns
- `subscriptionBreakdown` and `invitations` come as dynamic map keys -> parse into `Map<String, int>`
- Error API has two response shapes for `view=list` vs `view=metrics` - modeled as separate classes
- `at_risk` key in JSON maps to `atRisk` Dart field (snake_case to camelCase)
- Supporting sub-classes are defined in the same file as the root model (self-contained files)
- `dynamic settings` field on AdminBusinessDetail: typed as `dynamic` since schema is open

## Page Patterns
- Tab content pages: `StatelessWidget` outer (BlocProvider) + `StatefulWidget` inner `_View` (for scroll/search controllers)
- Detail pages: `StatelessWidget` outer (BlocProvider) → `StatelessWidget` inner with `BlocConsumer`
- Singleton blocs on tabs: `BlocProvider.value(value: sl<FooBloc>())`; factory blocs: `BlocProvider(create: (_) => sl<FooBloc>()..add(LoadEvent()))`
- List pagination: scroll listener triggers at 80% scroll (`currentScroll >= maxScroll * 0.8`)
- BlocConsumer listener: successMessage → green SnackBar, errorMessage → error SnackBar, deleted status → `context.pop()`

## Styling Conventions
- Every Scaffold: `backgroundColor: AppColors.background`
- Section cards: `Container` with `color: AppColors.surface`, `borderRadius: 12–16`, `border: AppColors.borderLight`, `boxShadow: AppColors.softShadow`
- Primary buttons: `backgroundColor: AppColors.primary`, `foregroundColor: Colors.white`
- Destructive action: `TextButton.styleFrom(foregroundColor: AppColors.error)`
- `SwitchListTile`: use `activeThumbColor` NOT `activeColor` (deprecated after Flutter 3.31)

## AppColors Reference
- Sage green primary: `AppColors.primary` / `primaryLight`
- Gold accent: `AppColors.gold` (badges, super admin)
- Backgrounds: `background` (warm cream), `surface` (near-white)
- Borders: `border`, `borderLight`
- Text: `textPrimary`, `textSecondary`, `textTertiary`
- Shadows: `AppColors.softShadow`, `cardShadow`, `elevatedShadow`

## Navigation (GoRouter)
- Push new page: `context.push('/path')`
- Replace/go: `context.go('/path')`
- Pop: `context.pop()` or `context.pop(result)`
- Admin user routes (not yet in router.dart as of this session): `/admin/users`, `/admin/users/:id`, `/admin/users/new`

## Lint rules to watch
- Local **function/variable** names inside method bodies must NOT start with `_` (lint: `no_leading_underscores_for_local_identifiers`)
- `child:` must be the **last** named argument in widget constructor calls
- Use `withValues(alpha: x)` instead of deprecated `withOpacity(x)`

## fl_chart patterns
- `getTooltipColor: (_) => AppColors.surface` on all tooltip data classes
- `FlBorderData(show: false)` on every chart
- Always disable top/right titles: `AxisTitles(sideTitles: SideTitles(showTitles: false))`
- Wrap every chart in a `Container` card: surface bg, `borderRadius: 14–16`, `borderLight` border, `cardShadow`
- Bottom title interval: avoid showing every tick on dense data — use `interval` param or `clamp`

## Admin analytics pages (added)
- `admin_analytics_page.dart` — `DefaultTabController(length:3)` host for revenue/engagement/retention
- `admin_revenue_tab.dart` — MRR KPIs, ARPU/NRR, MRR history LineChart, revenue by plan BarChart, churn LineChart
- `admin_engagement_tab.dart` — overview KPIs, activity progress bars, feature adoption bars, PieChart payments, team roles list
- `admin_retention_tab.dart` — health cards, TimeToValue card, churn LineChart, DataTable cohorts, at-risk business list
- `admin_errors_page.dart` — standalone; toggle list↔metrics, severity/resolved dropdowns, AdminErrorRow list, period chip selector, error trend LineChart
- `admin_error_row.dart` — expandable error card; severity colours (critical=0xFF9C27B0, error=AppColors.error, warning=AppColors.warning)
- `admin_search_bar.dart` — TextField with search prefix + clear suffix; owns or borrows TextEditingController
