<nav class="dataTable-pagination">
    <ul class="dataTable-pagination-list">
        <li class="pager"><a href="{{ $users->previousPageUrl() }}">‹</a></li>
        @foreach ($users->getUrlRange(1, $users->lastPage()) as $page => $url)
            {{-- <li class="active"><a --}}
            @if ($page == $users->currentPage())
                <li class="active"><a>{{ $page }}</a></li>
            @else
                <li><a href="{{ $url }}">{{ $page }}</a></li>
            @endif
        @endforeach
        <li class="pager"><a href="{{ $users->nextPageUrl() }}">›</a></li>
    </ul>
</nav>
