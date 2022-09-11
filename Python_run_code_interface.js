<div class="container-fluid">
<%= _.template($('#input_constructor').html())({id:"rciitrda", description:"Код", default_selector: "string", disable_expression:true, disable_int:true, value_string: "", help: {description: "Тут вы можете запустить код с заранее установлеными переменными \\ значениями\nпример исполняймого кода ВНИМАНИЕ в print() укажите что что вам нужно в вашем возврощаймом значении\n\nfrom telethon import TelegramClient\nfrom telethon.tl.types import PeerUser\n\napi_id = [[APP_ID]]\napi_hash = '[[APP_HASH]]'\n\nclient = TelegramClient('[[NUMBER]]', api_id, api_hash)\nclient.start()\n\nsend = client.send_message(\"[[USER]]\",\"+[[MESSAGE]]\")\nprint(\"Удачно\")"} }) %>
<%= _.template($('#input_constructor').html())({id:"vgcmtjei", description:"Рабочая папка", default_selector: "string", disable_expression:true, disable_int:true, value_string: "", help: {description: "Рабочая папка по умолчанию - это путь, где установлен BAS, вы можете изменить его с помощью параметра 'Рабочая папка' или запустить команду 'cd' внутри python скрипта."} }) %>
<%= _.template($('#variable_constructor').html())({id:"Save", description:"Результат", default_variable: "PYTHON_RESULT", help: {description: "Значение print()"}}) %>
</div>
<div class="tooltipinternal">
<div class="tr tooltip-paragraph-first-fold">Тут вы можете запустить код с заранее установлеными переменными \ значениями</div>
<div class="tr tooltip-paragraph-fold">пример исполняймого кода ВНИМАНИЕ в print() укажите что что вам нужно в вашем возврощаймом значении</div>
<div class="tr tooltip-paragraph-fold">from telethon import TelegramClient</div>
<div class="tr tooltip-paragraph-fold">from telethon.tl.types import PeerUser</div>
<div class="tr tooltip-paragraph-fold">api_id = [[APP_ID]]</div>
<div class="tr tooltip-paragraph-fold">api_hash = '[[APP_HASH]]'</div>
<div class="tr tooltip-paragraph-fold">client = TelegramClient('[[NUMBER]]', api_id, api_hash)</div>
<div class="tr tooltip-paragraph-fold">client.start()</div>
<div class="tr tooltip-paragraph-fold">send = client.send_message("[[USER]]","+[[MESSAGE]]")</div>
<div class="tr tooltip-paragraph-last-fold">print("Удачно")</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
