//Fs Module.... Fs means files system...

const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')



writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag:'a'}
)
// The flag 'a' is used to append the content to the file. If you don't use it, it will overwrite the file.
// If you want to create a new file, you can use the flag 'w'.

