@echo off
taskkill /f /t /im javaw.exe
taskkill /f /t /im java.exe
java -noverify -Dprism.order=sw -Dfile.encoding=UTF-8 -jar MPrating.jar 2> last.txt
type last.txt>>log.txt