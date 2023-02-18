export const showAlert = async (type, message) => {
  function leftur() {
    document.getElementById('error').innerHTML = '';
  }
  document.getElementById('error').innerHTML = `<div class="bs-component"><div class="alert alert-dismissible alert-${type}"><button class="close" type="button" data-dismiss="alert">×</button> ${message} </div></div>`;
  setTimeout(leftur, 3000);
}

export const showAlert2 = async (type, message) => {
  function leftur() {
    document.getElementById('error2').innerHTML = '';
  }
  document.getElementById('error2').innerHTML = `<div class="bs-component"><div class="alert alert-dismissible alert-${type}"><button class="close" type="button" data-dismiss="alert">×</button> ${message} </div></div>`;
  setTimeout(leftur, 3000);
} 