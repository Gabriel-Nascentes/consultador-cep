function consultaCep() {
  let cep = document.querySelector("#cep").value;
  let url = "https://viacep.com.br/ws/" + cep + "/json";
  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      document.querySelector(".cep").innerHTML = cep;
      document.querySelector(".logradouro").innerHTML = response.logradouro;
      document.querySelector(".bairro").innerHTML = response.bairro;
      document.querySelector(".localidade").innerHTML = response.localidade;
      document.querySelector(".uf").innerHTML = response.uf;
      $(".table-cep").show();
    },
  });
}
$(function () {
  $(".table-cep").hide();
});
