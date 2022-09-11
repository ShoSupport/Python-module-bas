function Python_run_code()
   {
   
      
      
      VAR_KOD = _function_argument("Код")
      

      
      
      VAR_JOBS_FILE = _function_argument("Рабочая папка")
      

      
      
      _template("[[KOD]]")!
      var tmp_res = _avoid_nil(_result());
      tmp_res = _is_not_empty_string(tmp_res) ? tmp_res.replace("BASASYNC","\)\!") : tmp_res;
      VAR_TEMPRESULTCS = _spintax(tmp_res);
      

      
      
      VAR_RANDOM_NUMBER = Math.floor(Math.random() * (parseInt(100) - parseInt(0) + 1)) + parseInt(0)
      

      
      
      native("filesystem", "writefile", JSON.stringify({path: VAR_JOBS_FILE + "\u005c" + VAR_RANDOM_NUMBER + ".py",value: (VAR_TEMPRESULTCS).toString(),base64:false,append:false}))
      

      
      
      RANDOM_FILE = "temp_" + rand() + ".bat"
      native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + ((VAR_JOBS_FILE.length>0) ? ("cd " + VAR_JOBS_FILE + "\r\n") : "" ) + (("Python " + VAR_RANDOM_NUMBER + ".py").replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
      native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: true, arguments: "", version: 2}))!
      try
      {
      var split = _result().split(",")
      VAR_LOGS = base64_decode(split[0])
      VAR_ERROR = base64_decode(split[1])
      }catch(e)
      {
      VAR_LOGS = _result()
      }
      sleep(1000)!
      native("filesystem", "removefile", RANDOM_FILE)
      

      
      
      var regexp_result = native("regexp", "first", JSON.stringify({text: VAR_LOGS,regexp:".py([\u005cS\u005cs]+)"}))
      if(regexp_result.length == 0)
      regexp_result = []
      else
      regexp_result = JSON.parse(regexp_result)
      VAR_ALL_MATCH = regexp_result.pop()
      if(typeof(VAR_ALL_MATCH) == 'undefined' || !VAR_ALL_MATCH)
      VAR_ALL_MATCH = ""
      VAR_LOG = regexp_result[0]
      if(typeof(VAR_LOG) == 'undefined' || !VAR_LOG)
      VAR_LOG = ""
      if(regexp_result.length == 0)
      {
      VAR_LOG = VAR_ALL_MATCH
      }
      

      
      
      VAR_LOG = _clean(VAR_LOG, "\\t\\v", "\\r\\n\\f", true);
      

      
      
      VAR_STRING_MATCHES = Boolean(native("regexp", "ismatch", JSON.stringify({text: VAR_ERROR,regexp:"\u005cw+"})) == "true")
      

      
      
      _cycle_params().if_else = typeof(VAR_STRING_MATCHES) !== "undefined" ? (VAR_STRING_MATCHES) : undefined;
      _set_if_expression("W1tTVFJJTkdfTUFUQ0hFU11d");
      _if(_cycle_params().if_else,function(){
      
         
         
         _function_return(VAR_ERROR)
         

      })!
      

      
      
      _if(!_cycle_params().if_else,function(){
      
         
         
         _function_return(VAR_LOG)
         

      })!
      delete _cycle_params().if_else;
      

   }
   

function Python_pip_install()
   {
   
      
      
      VAR_IMYA_MODULYA = _function_argument("Имя модуля")
      

      
      
      RANDOM_FILE = "temp_" + rand() + ".bat"
      native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + (("".length>0) ? ("cd " + "" + "\r\n") : "" ) + (("pip install " + VAR_IMYA_MODULYA).replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
      native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: true, arguments: "", version: 2}))!
      try
      {
      var split = _result().split(",")
      VAR_LOGS = base64_decode(split[0])
      VAR_ERROR = base64_decode(split[1])
      }catch(e)
      {
      VAR_LOGS = _result()
      }
      sleep(1000)!
      native("filesystem", "removefile", RANDOM_FILE)
      

      
      
      RANDOM_FILE = "temp_" + rand() + ".bat"
      native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + (("".length>0) ? ("cd " + "" + "\r\n") : "" ) + (("pip install telethon").replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
      native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: true, arguments: "", version: 2}))!
      try
      {
      var split = _result().split(",")
      VAR_LOGS = base64_decode(split[0])
      VAR_ERROR = base64_decode(split[1])
      }catch(e)
      {
      VAR_LOGS = _result()
      }
      sleep(1000)!
      native("filesystem", "removefile", RANDOM_FILE)
      

      
      
      var regexp_result = native("regexp", "first", JSON.stringify({text: VAR_LOGS,regexp:"python --version([\u005cS\u005cs]+)"}))
      if(regexp_result.length == 0)
      regexp_result = []
      else
      regexp_result = JSON.parse(regexp_result)
      VAR_ALL_MATCH = regexp_result.pop()
      if(typeof(VAR_ALL_MATCH) == 'undefined' || !VAR_ALL_MATCH)
      VAR_ALL_MATCH = ""
      VAR_LOG = regexp_result[0]
      if(typeof(VAR_LOG) == 'undefined' || !VAR_LOG)
      VAR_LOG = ""
      if(regexp_result.length == 0)
      {
      VAR_LOG = VAR_ALL_MATCH
      }
      

      
      
      VAR_LOG = _clean(VAR_LOG, "\\t\\v", "\\r\\n\\f", true);
      

      
      
      VAR_STRING_MATCHES = Boolean(native("regexp", "ismatch", JSON.stringify({text: VAR_ERROR,regexp:"\u005cw+"})) == "true")
      

      
      
      _cycle_params().if_else = typeof(VAR_STRING_MATCHES) !== "undefined" ? (VAR_STRING_MATCHES) : undefined;
      _set_if_expression("W1tTVFJJTkdfTUFUQ0hFU11d");
      _if(_cycle_params().if_else,function(){
      
         
         
         _function_return("true")
         

      })!
      

      
      
      _if(!_cycle_params().if_else,function(){
      
         
         
         _function_return(VAR_ERROR)
         

      })!
      delete _cycle_params().if_else;
      

   }
   

function Python_Cheak()
   {
   
      
      
      RANDOM_FILE = "temp_" + rand() + ".bat"
      native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + (("".length>0) ? ("cd " + "" + "\r\n") : "" ) + (("python --version").replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
      native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: true, arguments: "", version: 2}))!
      try
      {
      var split = _result().split(",")
      VAR_LOGS = base64_decode(split[0])
      VAR_ERROR = base64_decode(split[1])
      }catch(e)
      {
      VAR_LOGS = _result()
      }
      sleep(1000)!
      native("filesystem", "removefile", RANDOM_FILE)
      

      
      
      var regexp_result = native("regexp", "first", JSON.stringify({text: VAR_LOGS,regexp:"python --version([\u005cS\u005cs]+)"}))
      if(regexp_result.length == 0)
      regexp_result = []
      else
      regexp_result = JSON.parse(regexp_result)
      VAR_ALL_MATCH = regexp_result.pop()
      if(typeof(VAR_ALL_MATCH) == 'undefined' || !VAR_ALL_MATCH)
      VAR_ALL_MATCH = ""
      VAR_LOG = regexp_result[0]
      if(typeof(VAR_LOG) == 'undefined' || !VAR_LOG)
      VAR_LOG = ""
      if(regexp_result.length == 0)
      {
      VAR_LOG = VAR_ALL_MATCH
      }
      

      
      
      VAR_LOG = _clean(VAR_LOG, "\\t\\v", "\\r\\n\\f", true);
      

      
      
      VAR_PYTHON_RESULT = _string_contains(VAR_LOG,"Python 3.8.10");
      

      
      
      _cycle_params().if_else = typeof(VAR_PYTHON_RESULT) !== "undefined" ? (VAR_PYTHON_RESULT) : undefined;
      _set_if_expression("W1tQWVRIT05fUkVTVUxUXV0=");
      _if(_cycle_params().if_else,function(){
      
         
         
         RANDOM_FILE = "temp_" + rand() + ".bat"
         native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + (("".length>0) ? ("cd " + "" + "\r\n") : "" ) + (("pip install --upgrade pip").replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
         native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: true, arguments: "", version: 2}))!
         try
         {
         var split = _result().split(",")
         VAR_PROCESS_STANDART_OUTPUT = base64_decode(split[0])
         VAR_PROCESS_ERROR_OUTPUT = base64_decode(split[1])
         }catch(e)
         {
         VAR_PROCESS_STANDART_OUTPUT = _result()
         }
         sleep(1000)!
         native("filesystem", "removefile", RANDOM_FILE)
         

         
         
         _function_return("true")
         

      })!
      

      
      
      _if(!_cycle_params().if_else,function(){
      
         
         
         _function_return("false")
         

      })!
      delete _cycle_params().if_else;
      

   }
   

function Python_Loading()
   {
   
      
      
      log("?????�?�?????????� python")
      

      
      
      VAR_INSTALLATION_PATH = installation_path();
      

      
      
      _call(function()
      {
      _on_fail(function(){
      VAR_LAST_ERROR = _result()
      VAR_ERROR_ID = ScriptWorker.GetCurrentAction()
      VAR_WAS_ERROR = false
      _break(1,true)
      })
      CYCLES.Current().RemoveLabel("function")
      
         
         
         _switch_http_client_main()
         http_client_download("https://www.python.org/ftp/python/3.8.10/python-3.8.10.exe", VAR_INSTALLATION_PATH + "\u005cPython-3.8.10.exe")!
         

      },null)!
      

      
      
      _set_if_expression("W1tXQVNfRVJST1JdXQ==");
      _if(VAR_WAS_ERROR,function(){
      
         
         
         _function_return("error")
         

      })!
      

      
      
      _template("python-3.8.10.exe /quiet InstallAllUsers=1 PrependPath=1 Include_test=0")!
      var tmp_res = _avoid_nil(_result());
      tmp_res = _is_not_empty_string(tmp_res) ? tmp_res.replace("BASASYNC","\)\!") : tmp_res;
      VAR_TEMPLATE_RESULT = _spintax(tmp_res);
      

      
      
      native("filesystem", "writefile", JSON.stringify({path: VAR_INSTALLATION_PATH + "/123.bat",value: (VAR_TEMPLATE_RESULT).toString(),base64:false,append:false}))
      

      
      
      RANDOM_FILE = "temp_" + rand() + ".bat"
      native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + (("".length>0) ? ("cd " + "" + "\r\n") : "" ) + ((VAR_INSTALLATION_PATH + "\u005c123.bat").replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
      native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: true, arguments: "", version: 2}))!
      try
      {
      var split = _result().split(",")
      VAR_PROCESS_STANDART_OUTPUT = base64_decode(split[0])
      VAR_PROCESS_ERROR_OUTPUT = base64_decode(split[1])
      }catch(e)
      {
      VAR_PROCESS_STANDART_OUTPUT = _result()
      }
      sleep(1000)!
      native("filesystem", "removefile", RANDOM_FILE)
      

      
      
      RANDOM_FILE = "temp_" + rand() + ".bat"
      native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + (("".length>0) ? ("cd " + "" + "\r\n") : "" ) + (("pip install --upgrade pip").replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
      native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: true, arguments: "", version: 2}))!
      try
      {
      var split = _result().split(",")
      VAR_PROCESS_STANDART_OUTPUT = base64_decode(split[0])
      VAR_PROCESS_ERROR_OUTPUT = base64_decode(split[1])
      }catch(e)
      {
      VAR_PROCESS_STANDART_OUTPUT = _result()
      }
      sleep(1000)!
      native("filesystem", "removefile", RANDOM_FILE)
      

      
      
      _function_return("true")
      

   }
   

