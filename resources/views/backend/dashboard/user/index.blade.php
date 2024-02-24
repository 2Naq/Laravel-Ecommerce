<div class="-mx-3 mt-6 flex flex-wrap">
    <div class="flex-0 w-full max-w-full px-3">
        <div
            class="dark:shadow-soft-dark-xl shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-white bg-clip-border dark:bg-gray-950">
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
                <h5 class="mb-0">{{ $title['tableHeading'] }}</h5>
                <p class="mb-0 text-sm leading-normal"> A lightweight, extendable, dependency-free javascript HTML table
                    plugin.</p>
            </div>
            <div class="table-responsive">
                <div
                    class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-height fixed-columns">
                    @include('backend.dashboard.user.components.filter')

                    {{-- table --}}
                    @include('backend.dashboard.user.components.table')

                    {{-- Pagination --}}
                    <div class="dataTable-bottom my-9">
                        <div class="dataTable-info">Showing {{ $users->firstItem() }} to {{ $users->lastItem() }} of
                            {{ $users->total() }} entries</div>

                        {{-- Pagination plugin --}}
                        @include('vendor/pagination.tailwind-cp_custom')
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
