window.addEventListener('load', function() {
  const rustCode = document.createElement('pre');
  rustCode.innerHTML = `fn main() {
    println!("Hello, World!");
}`;
  document.querySelector('.container').appendChild(rustCode);
});
