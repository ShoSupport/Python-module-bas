<div class="container-fluid">
<%= _.template($('#input_constructor').html())({id:"fqrpmphq", description:tr("Вставьте ваш код"), default_selector: "string", disable_int:true, disable_editor:true, disable_string:true, use_textarea:true, size: 8, disable_type_chooser:true,textarea_height:80, help: {description: ""} }) %>
<%= _.template($('#input_constructor').html())({id:"emzxlirq", description:"Рабочая папка", default_selector: "string", disable_expression:true, disable_int:true, value_string: "", help: {description: ""} }) %>
<%= _.template($('#input_constructor').html())({id:"snftgjxe", description:"Удалять файл после использования", default_selector: "string", variants: ["true","false"], disable_int:true, value_string: "", help: {description: ""} }) %>
<%= _.template($('#variable_constructor').html())({id:"Save", description:"Результат", default_variable: "PYTHON_RESULT", help: {description: ""}}) %>
</div>
<div class="tooltipinternal">
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
