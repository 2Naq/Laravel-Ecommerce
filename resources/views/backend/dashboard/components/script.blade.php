@if (isset($config['js']) && is_array($config['js']))
    @foreach ($config['js'] as $key => $val)
        <script src="{{ htmlspecialchars($val) }}"></script>
    @endforeach
@endif
