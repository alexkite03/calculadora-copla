<script>
    $(document).ready(function () {
      //Declaración variables:
      var trabajoSP = 0;
      var trabajoF = 0;
      var voluntarioH = 0;
      var cursoDESA = 0;
      var cursoPER = 0;
      var cursoQ = 0;
      var monograficosH = 0;
      var cursosH = 0;

      var total = 0;
      var experiencia = 0;
      var totalexp = 0;
      var horas = 0;

      $("form :input").change(function () {
          //Cada vez que se cambie un valor del formulario

          //Calculo de inputs
          

            if ($('#trabajoSP').val() >= 0 && $('#trabajoSP').val() <= 12) {
              trabajoSP = (0.50 * $('#trabajoSP').val());
            } else {
              trabajoSP = 6;
            }

            if ($('#trabajoF').val() >= 0 && $('#trabajoF').val() <= 20) {
              trabajoF = (0.30 * $('#trabajoF').val());
            } else {
              trabajoF = 6;
            }

            if ($('#voluntarioH').val() >= 0 && $('#voluntarioH').val() >= 10) {
              horas = $('#voluntarioH').val() / 10;
              voluntarioH = (0.25 * horas);
            } else {
              voluntarioH = 0;
            }

            experiencia = trabajoSP + trabajoF + voluntarioH;

            if(experiencia >= 6){
              totalexp = 6;
            }
            else{
              totalexp = trabajoSP + trabajoF + voluntarioH;
            }


            if ($('#monograficosH').val() >= 0 && $('#monograficosH').val() <= 12) {
              monograficosH = (0.25 * $('#monograficosH').val());
          } else {
            monograficosH = 3;
          }

          if ($('#cursosH').val() >= 0 && $('#cursosH').val() <= 6) {
            cursosH = (0.50 * $('#cursosH').val());
          } else {
            cursosH = 3;
          }

        

        //Calculo de todos los inputs radio
        if ($('input:radio[name=gridDesa]:checked').val() == "1") {
          cursoDESA = 2;
        } else {
          cursoDESA = 0;
        }

        if ($('input:radio[name=gridPer]:checked').val() == "1") {
          cursoPER = 1;
        } else {
          cursoPER = 0;
        }

        if ($('input:radio[name=gridQ]:checked').val() == "1") {
          cursoQ = 1;
        } else {
          cursoQ = 0;
        }
        
        //Calculo final
        total = totalexp + cursoDESA + cursoPER + cursoQ + monograficosH + cursosH;
        $('#total').text(total + " puntos.");
        
      });

    });
  </script>