var ieyhdjaq = GetInputConstructorValue("ieyhdjaq", loader);
                 if(ieyhdjaq["original"].length == 0)
                 {
                   Invalid("Имя модуля" + " is empty");
                   return;
                 }
var cwiayjvq = GetInputConstructorValue("cwiayjvq", loader);
                 if(cwiayjvq["original"].length == 0)
                 {
                   Invalid("Логирование" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#Python_pip_install_code").html())({"ieyhdjaq": ieyhdjaq["updated"],"cwiayjvq": cwiayjvq["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
