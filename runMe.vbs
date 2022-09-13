Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c bulikakam.bat"
oShell.Run strArgs, 0, false