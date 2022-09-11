var rciitrda = GetInputConstructorValue("rciitrda", loader);
                 if(rciitrda["original"].length == 0)
                 {
                   Invalid("Код" + " is empty");
                   return;
                 }
var vgcmtjei = GetInputConstructorValue("vgcmtjei", loader);
                 if(vgcmtjei["original"].length == 0)
                 {
                   Invalid("Рабочая папка" + " is empty");
                   return;
                 }
var Save = this.$el.find("#Save").val().toUpperCase();
try{
          var code = loader.GetAdditionalData() + _.template($("#Python_run_code_code").html())({"rciitrda": rciitrda["updated"],"vgcmtjei": vgcmtjei["updated"],"variable": "VAR_" + Save});
          code = Normalize(code,0);
          BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
        }catch(e)
        {}
