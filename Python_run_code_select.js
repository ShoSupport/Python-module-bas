var fqrpmphq = GetInputConstructorValue("fqrpmphq", loader);
                 if(fqrpmphq["original"].length == 0)
                 {
                   Invalid("Код" + " is empty");
                   return;
                 }
var emzxlirq = GetInputConstructorValue("emzxlirq", loader);
                 if(emzxlirq["original"].length == 0)
                 {
                   Invalid("Рабочая папка" + " is empty");
                   return;
                 }
var snftgjxe = GetInputConstructorValue("snftgjxe", loader);
                 if(snftgjxe["original"].length == 0)
                 {
                   Invalid("Удалять файл после использования" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#Python_run_code_code").html())({"fqrpmphq": fqrpmphq["updated"],"emzxlirq": emzxlirq["updated"],"snftgjxe": snftgjxe["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
