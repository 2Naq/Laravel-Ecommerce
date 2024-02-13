    {{-- Pagination --}}
    <div
        class="dataTables_paginate paging_simple_numbers flex content-center justify-end"
        id="DataTables_Table_0_paginate"
    >
        <ul class="pagination">
            <li
                class="paginate_button previous"
                id="DataTables_Table_0_previous"
            ><a
                    href="{{ $users->previousPageUrl() }}"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx="0"
                    tabindex="0"
                >Previous</a></li>
            @foreach ($users->getUrlRange(1, $users->lastPage()) as $page => $url)
                <li class="paginate_button">
                    <a
                        href="{{ $url }}"
                        aria-controls="DataTables_Table_0"
                        data-dt-idx="1"
                        tabindex="0"
                    >{{ $page }}
                    </a>
                </li>
            @endforeach
            <li
                class="paginate_button next"
                id="DataTables_Table_0_next"
            >
                <a
                    href="{{ $users->nextPageUrl() }}"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx="4"
                    tabindex="0"
                >Next
                </a>
            </li>
        </ul>
    </div>
