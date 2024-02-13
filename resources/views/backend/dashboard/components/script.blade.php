<!-- Mainly scripts -->
<script src="access/js/bootstrap.min.js"></script>
<script src="access/js/plugins/metisMenu/jquery.metisMenu.js"></script>
<script src="access/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

<!-- jQuery UI -->
<script src="access/js/plugins/jquery-ui/jquery-ui.min.js"></script>

@if (isset($config['js']) && is_array($config['js']))
    @foreach ($config['js'] as $key => $val)
        <script src="{{ htmlspecialchars($val) }}"></script>
    @endforeach
@endif
