/**
 * Exemplo de uso de Plugin JQuery
 * @author André Barros
 */

 $(document).ready(function(){
     $('#frmCadastro').validate({
         rules:{
            nome: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email:true
            },
            senha: {
                required: true,
                minlength: 8
            },
            senhaConfirmacao: {
                required: true,
                equalTo: senha
            },
            termos: {
                required: true
            }
         },
         messages:{
           nome: {
               required: "Favor Digitar o Nome",
               minlength: "O Campo nome deve ter no mínimo 4 caracteres" 
           },
           email: {
               required: "O campo E-mail é Obrigatório",
               email: "E-Mail Invalido"
           },
           senha: {
               required: "Campo Obrigatório",
               minlength: "A senha deve ter no mínimo 8 caracteres"
           },
           senhaConfirmacao: {
                required: "Campo Obrigatório",
                equalTo: "A senha não Esta Igual"
           },
           termos: {
               required: "Campo Obrigatório" 
         }
     })
 })