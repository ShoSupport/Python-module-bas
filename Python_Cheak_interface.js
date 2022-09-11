<div class="container-fluid">
<%= _.template($('#variable_constructor').html())({id:"Save", description:"Результат", default_variable: "PYTHON_RESULT", help: {description: "Result"}}) %>
</div>
<div class="tooltipinternal">
<div class="tr tooltip-paragraph-first-fold">Проверка установлен ли Python если установлен вернет true если нет то false</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
