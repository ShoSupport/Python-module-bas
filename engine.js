function Cheak()
   {
   
      
      
      VAR_PYTHON_LOG = _function_argument("Логирование")
      

      
      
      _if(VAR_PYTHON_LOG,function(){
      
         
         
         log("Проверяю установлен ли Python...")
         

      })!
      

      
      
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
      

      
      
      VAR_LOG = native("regexp", "replace", JSON.stringify({text: VAR_LOG,regexp:"\u005cs+",replace:""}))
      

      
      
      VAR_PYTHON_RESULT = (VAR_LOG).indexOf("Python") >= 0
      

      
      
      _cycle_params().if_else = VAR_PYTHON_RESULT;
      _if(_cycle_params().if_else,function(){
      
         
         
         _if(VAR_PYTHON_LOG,function(){
         
            
            
            log("Python установлен")
            

            
            
            log("Обновляю пакет \u0027pip\u0027")
            

         })!
         

         
         
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
         

         
         
         _if(VAR_PYTHON_LOG,function(){
         
            
            
            log("Пакет \u0027pip\u0027 обновлен")
            

         })!
         

         
         
         _function_return(true)
         

      })!
      

      
      
      _if(!_cycle_params().if_else,function(){
      
         
         
         _if(VAR_PYTHON_LOG,function(){
         
            
            
            log("Python не установлен на вашем пк")
            

         })!
         

         
         
         _function_return(false)
         

      })!
      delete _cycle_params().if_else;
      

   }
   

function run_code()
   {
   
      
      
      VAR_KOD = _function_argument("Код")
      

      
      
      VAR_RABOCHAYA_PAPKA = _function_argument("Рабочая папка")
      

      
      
      VAR_UDALYAT_FAIL_POSLE_ISPOLZOVANIYA = _function_argument("Удалять файл после использования")
      

      
      
      VAR_STRING_MATCHES = Boolean(native("regexp", "ismatch", JSON.stringify({text: VAR_RABOCHAYA_PAPKA,regexp:".+"})) == "true")
      

      
      
      _cycle_params().if_else = VAR_STRING_MATCHES;
      _if(_cycle_params().if_else,function(){
      
      })!
      

      
      
      _if(!_cycle_params().if_else,function(){
      
         
         
         fail_user("Не указан путь до рабочей папки!",false)
         

      })!
      delete _cycle_params().if_else;
      

      
      
      _call(function()
      {
      _on_fail(function(){
      VAR_LAST_ERROR = _result()
      VAR_ERROR_ID = ScriptWorker.GetCurrentAction()
      VAR_WAS_ERROR = false
      _break(1,true)
      })
      CYCLES.Current().RemoveLabel("function")
      
         
         
         VAR_RABOCHAYA_PAPKA = _replace_string(VAR_RABOCHAYA_PAPKA,"\u005c","/");
         

      },null)!
      

      
      
      _template("[[KOD]]")!
      var tmp_res = _avoid_nil(_result());
      tmp_res = _is_not_empty_string(tmp_res) ? tmp_res.replace("BASASYNC","\)\!") : tmp_res;
      VAR_TEMPRESULTCS = tmp_res;
      

      
      
      VAR_RANDOM_NUMBER = Math.floor(Math.random() * (parseInt(100) - parseInt(0) + 1)) + parseInt(0)
      

      
      
      native("filesystem", "writefile", JSON.stringify({path: VAR_RABOCHAYA_PAPKA + "/" + VAR_RANDOM_NUMBER + ".py",value: (VAR_TEMPRESULTCS).toString(),base64:false,append:false}))
      

      
      
      RANDOM_FILE = "temp_" + rand() + ".bat"
      native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + ((VAR_RABOCHAYA_PAPKA.length>0) ? ("cd " + VAR_RABOCHAYA_PAPKA + "\r\n") : "" ) + (("python " + VAR_RANDOM_NUMBER + ".py").replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
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
      

      
      
      var regexp_result = native("regexp", "first", JSON.stringify({text: VAR_LOGS,regexp:"python " + VAR_RANDOM_NUMBER + ".py([\u005cS\u005cs]+)"}))
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
      

      
      
      VAR_STRING_MATCHES = Boolean(native("regexp", "ismatch", JSON.stringify({text: VAR_ERROR,regexp:"\u005cw+"})) == "true")
      

      
      
      _set_if_expression("W1tVREFMWUFUX0ZBSUxfUE9TTEVfSVNQT0xaT1ZBTklZQV1d");
      _if(typeof(VAR_UDALYAT_FAIL_POSLE_ISPOLZOVANIYA) !== "undefined" ? (VAR_UDALYAT_FAIL_POSLE_ISPOLZOVANIYA) : undefined,function(){
      
         
         
         native("filesystem", "removefile", VAR_RABOCHAYA_PAPKA + "/" + VAR_RANDOM_NUMBER + ".py")
         

      })!
      

      
      
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
   

function pip_install()
   {
   
      
      
      VAR_PYTHON_LOG = _function_argument("Логирование")
      

      
      
      VAR_IMYA_MODULYA = _function_argument("Имя модуля")
      

      
      
      _if(VAR_PYTHON_LOG,function(){
      
         
         
         log("Установка модуля " + VAR_IMYA_MODULYA + "...")
         

      })!
      

      
      
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
      

      
      
      var regexp_result = native("regexp", "first", JSON.stringify({text: VAR_LOGS,regexp:"pip install " + VAR_IMYA_MODULYA + "([\u005cS\u005cs]+)"}))
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
      

      
      
      VAR_LIST_CONTAINS = (VAR_LOG).indexOf("Successfully installed") >= 0
      

      
      
      _cycle_params().if_else = VAR_LIST_CONTAINS;
      _if(_cycle_params().if_else,function(){
      
         
         
         _if(VAR_PYTHON_LOG,function(){
         
            
            
            log("Установка успешно")
            

         })!
         

         
         
         _function_return("true")
         

      })!
      

      
      
      _if(!_cycle_params().if_else,function(){
      
         
         
         VAR_LIST_CONTAINS = (VAR_LOG).indexOf("Requirement already satisfied") >= 0
         

         
         
         _if(VAR_LIST_CONTAINS,function(){
         
            
            
            _if(VAR_PYTHON_LOG,function(){
            
               
               
               log("Модуль установлен ранее!")
               

            })!
            

            
            
            _function_return("true")
            

         })!
         

         
         
         RANDOM_FILE = "temp_" + rand() + ".bat"
         native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + (("C:\u005cProgram Files (x86)\u005cPython38-32\u005cScripts".length>0) ? ("cd " + "C:\u005cProgram Files (x86)\u005cPython38-32\u005cScripts" + "\r\n") : "" ) + (("pip install " + VAR_IMYA_MODULYA).replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
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
         

         
         
         var regexp_result = native("regexp", "first", JSON.stringify({text: VAR_LOGS,regexp:"pip install " + VAR_IMYA_MODULYA + "([\u005cS\u005cs]+)"}))
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
         

         
         
         VAR_LIST_CONTAINS = (VAR_LOG).indexOf("Successfully installed") >= 0
         

         
         
         _cycle_params().if_else = VAR_LIST_CONTAINS;
         _if(_cycle_params().if_else,function(){
         
            
            
            _if(VAR_PYTHON_LOG,function(){
            
               
               
               log("Установка успешно")
               

            })!
            

            
            
            _function_return("true")
            

         })!
         

         
         
         _if(!_cycle_params().if_else,function(){
         
            
            
            VAR_LIST_CONTAINS = (VAR_LOG).indexOf("Requirement already satisfied") >= 0
            

            
            
            _if(VAR_LIST_CONTAINS,function(){
            
               
               
               _if(VAR_PYTHON_LOG,function(){
               
                  
                  
                  log("Модуль установлен ранее!")
                  

               })!
               

               
               
               _function_return("true")
               

            })!
            

            
            
            log("Не удалось установить модуль " + VAR_IMYA_MODULYA)
            

            
            
            _function_return(VAR_ERROR)
            

         })!
         delete _cycle_params().if_else;
         

      })!
      delete _cycle_params().if_else;
      

   }
   

function Loading()
   {
   
      
      
      VAR_PYTHON_LOG = _function_argument("Логирование")
      

      
      
      _if(VAR_PYTHON_LOG,function(){
      
         
         
         log("Install python")
         

      })!
      

      
      
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
         http_client_download("https://www.python.org/ftp/python/3.8.10/python-3.8.10.exe", "C:\u005cPython_install_BAS\u005cPython-3.8.10.exe")!
         

      },null)!
      

      
      
      _if(VAR_WAS_ERROR,function(){
      
         
         
         _if(VAR_PYTHON_LOG,function(){
         
            
            
            fail_user("Ошибка загрузки файла установщика, проверьте соединение с интернетом",false)
            

         })!
         

         
         
         _function_return("error")
         

      })!
      

      
      
      _template("python-3.8.10.exe /quiet InstallAllUsers=1 PrependPath=1")!
      var tmp_res = _avoid_nil(_result());
      tmp_res = _is_not_empty_string(tmp_res) ? tmp_res.replace("BASASYNC","\)\!") : tmp_res;
      VAR_TEMPLATE_RESULT = _spintax(tmp_res);
      

      
      
      native("filesystem", "writefile", JSON.stringify({path: "C:\u005cPython_install_BAS\u005c123.bat",value: (VAR_TEMPLATE_RESULT).toString(),base64:false,append:false}))
      

      
      
      _if(VAR_PYTHON_LOG,function(){
      
         
         
         log("Запущен процесс установки Python, возможно потребуется подтверждение администратора пк")
         

      })!
      

      
      
      RANDOM_FILE = "temp_" + rand() + ".bat"
      native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + (("".length>0) ? ("cd " + "" + "\r\n") : "" ) + (("C:\u005cPython_install_BAS\u005c123.bat").replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
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
      

      
      
      VAR_LOG = native("regexp", "replace", JSON.stringify({text: VAR_LOG,regexp:"\u005cs+",replace:""}))
      

      
      
      VAR_PYTHON_RESULT = (VAR_LOG).indexOf("Python") >= 0
      

      
      
      _cycle_params().if_else = VAR_PYTHON_RESULT;
      _if(_cycle_params().if_else,function(){
      
         
         
         _if(VAR_PYTHON_LOG,function(){
         
            
            
            log("Python установлен")
            

            
            
            log("Обновляю пакет \u0027pip\u0027")
            

         })!
         

         
         
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
         

         
         
         _if(VAR_PYTHON_LOG,function(){
         
            
            
            log("Пакет \u0027pip\u0027 обновлен")
            

         })!
         

         
         
         _function_return(true)
         

      })!
      

      
      
      _if(!_cycle_params().if_else,function(){
      
         
         
         RANDOM_FILE = "temp_" + rand() + ".bat"
         native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\r\n" + (("".length>0) ? ("cd " + "" + "\r\n") : "" ) + (("cmd\nC:\u005cPython_install_BAS\u005c123.bat").replace(/\r?\n/g, "\r\n")),base64:false,append:false}))
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
         

         
         
         native("filesystem", "removefile", "C:\u005cPython_install_BAS")
         

         
         
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
         

         
         
         VAR_LOG = native("regexp", "replace", JSON.stringify({text: VAR_LOG,regexp:"\u005cs+",replace:""}))
         

         
         
         VAR_PYTHON_RESULT = (VAR_LOG).indexOf("Python") >= 0
         

         
         
         _if(VAR_PYTHON_RESULT,function(){
         
            
            
            _if(VAR_PYTHON_LOG,function(){
            
               
               
               log("Python установлен")
               

               
               
               log("Обновляю пакет \u0027pip\u0027")
               

            })!
            

            
            
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
            

            
            
            _if(VAR_PYTHON_LOG,function(){
            
               
               
               log("Пакет \u0027pip\u0027 обновлен")
               

            })!
            

            
            
            _function_return(true)
            

         })!
         

         
         
         _function_return(false)
         

      })!
      delete _cycle_params().if_else;
      

      
      
      _function_return("true")
      

   }
   

