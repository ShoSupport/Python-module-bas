var wjagatye = GetInputConstructorValue("wjagatye", loader);
                 if(wjagatye["original"].length == 0)
                 {
                   Invalid("Логирование" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#Python_Cheak_code").html())({"wjagatye": wjagatye["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
