@include('backend.dashboard.components.breadcrumb', ['title' => $config['seo']['index']['title']])
<div class="row mt20">
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="flex flex-col bg-white">
                <div class="ibox-title block">
                    <h5>{{ $config['seo']['index']['tableHeading'] }}</h5>
                    @include('backend.dashboard.user.components.toolbox')
                </div>
                @include('backend.dashboard.user.components.filter')
            </div>
            @include('backend.dashboard.user.components.table')
        </div>
    </div>
</div>
