@echo off
taskkill /f /t /im javaw.exe
taskkill /f /t /im java.exe
java -noverify -Dfile.encoding=UTF-8 -jar MPrating.jar 2> last.log
type last.log>>log.log