import { CommandInfo } from '../CommandItem'

export const commands: CommandInfo[] = [
	{
		command: 'start [file / dir]',
		description: 'Open file or directory',
	},
	{
		command: 'dir > file.txt',
		description: 'Create file',
	},
	{
		command: 'mkdir [dirName]',
		description: 'Create directory',
	},
	{
		command: 'del [file / dir]',
		description: 'Delete directory',
	},
]
