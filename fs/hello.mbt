pub type FS

extern "js" fn FS::readFileSync(path:String) -> String =
  #|(path) => require("fs").readFileSync(path).toString()

extern "js" fn log(o : String) =
  #| (o) => console.dir(o)

pub fn readFile(path:String) -> String {
  readFileSync(path)
}