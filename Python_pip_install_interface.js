<div class="container-fluid">
<%= _.template($('#input_constructor').html())({id:"ieyhdjaq", description:"Имя модуля", default_selector: "string", disable_expression:true, disable_int:true, value_string: "", help: {description: "Введите название вашего модуля"} }) %>
<%= _.template($('#input_constructor').html())({id:"cwiayjvq", description:"Логирование", default_selector: "string", variants: ["true","false"], disable_int:true, value_string: "", help: {description: ""} }) %>
<%= _.template($('#variable_constructor').html())({id:"Save", description:"Результат", default_variable: "PYTHON_RESULT", help: {description: "Если установка прошла без ошибок то вернет true есть с ошибкой вернет ошибку"}}) %>
</div>
<div class="tooltipinternal">
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
