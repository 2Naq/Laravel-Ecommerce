<div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-sm-12">
        <h2> {{ config('apps.user.title') }}</h2>
        <ol class="breadcrumb">
            <li>
                <a href="{{ route('dashboard.index') }}">Dashboard</a>
            </li>
            <li class="active">
                <strong>{{ config('apps.user.title') }}</strong>
            </li>
        </ol>
    </div>
</div>

<div class="row mt20">
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="flex flex-col bg-white">
                <div class="ibox-title block">
                    <h5>{{ config('apps.user.tableHeading') }}</h5>
                    @include('backend.dashboard.user.components.toolbox')
                </div>
                @include('backend.dashboard.user.components.filter')
            </div>
            @include('backend.dashboard.user.components.table')
        </div>
    </div>
</div>
