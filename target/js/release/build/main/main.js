let $output_buffer = '';
function $flush_output() {
  if ($output_buffer.length > 0) {
    console.log($output_buffer);
  }
}
function $print_string(a) {
  $output_buffer += a;
  const last_nl_index = $output_buffer.lastIndexOf('\n');
  if (last_nl_index >= 0) {
    console.log($output_buffer.slice(0, last_nl_index));
    $output_buffer = $output_buffer.slice(last_nl_index + 1);
  }
}
const username$hello$fs$$FS$readFileSync = (path) => require("fs").readFileSync(path).toString();
function moonbitlang$core$builtin$$println$0$(input) {
  $print_string(input);
  $print_string("\n");
}
function username$hello$fs$$readFile(path) {
  return username$hello$fs$$FS$readFileSync(path);
}
(function () {
  moonbitlang$core$builtin$$println$0$(username$hello$fs$$readFile("./package.json"));
}());
$flush_output();
