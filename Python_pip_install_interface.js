<div class="container-fluid">
<%= _.template($('#input_constructor').html())({id:"xzrlweuu", description:"Имя модуля", default_selector: "string", disable_expression:true, disable_int:true, value_string: "", help: {description: "Введите название вашего модуля"} }) %>
<%= _.template($('#variable_constructor').html())({id:"Save", description:"Результат", default_variable: "PYTHON_RESULT", help: {description: "Если установка прошла без ошибок то вернет true есть с ошибкой вернет ошибку"}}) %>
</div>
<div class="tooltipinternal">
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
