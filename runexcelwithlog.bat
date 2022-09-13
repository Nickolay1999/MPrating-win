@echo off
javaw -jar excelGenerator.jar 2> last.log
type last.log>>log.log