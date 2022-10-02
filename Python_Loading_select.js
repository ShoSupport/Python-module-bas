var xysnylot = GetInputConstructorValue("xysnylot", loader);
                 if(xysnylot["original"].length == 0)
                 {
                   Invalid("Логирование" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#Python_Loading_code").html())({"xysnylot": xysnylot["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
