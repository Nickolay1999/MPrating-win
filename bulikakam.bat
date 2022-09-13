@echo off
java -noverify -Dfile.encoding=UTF-8 -jar MPrating.jar 2> last.log
type last.log>>log.log