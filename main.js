user_info = document.getElementById('user_name');
user_btn = document.getElementById('user');

const user_data = [];

user_btn.addEventListener('click', () => {
  getData();
  user_data.push(getData);
});

function getData() {
  let name = prompt('What is your name?');
  let age = prompt('What is your age?');
}
