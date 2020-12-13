class File {
    constructor(name){
        this.name = name;
        this.info = {}
    }
    // more methods can be added to manipulate file info
    view(){
        return this.info
    }

}

class Directory {                 // consist of name of directory and two hash maps consisting of directories and files in diferent objects.
    constructor(name){
        this.name = name;
        this.dirs = {}                //hashmap to hold directories 
        this.files = {}               //hasmap to hold files    
    }
    makeDirectory(name){
        let newDirect = new Directory(name)
        this.dirs.push(newDirect)
    }
    addFile(file){
        this.files.push(file)
    }
    makeFile(name){
        let newFile = new File(name)
        this.files.push(newFile)
    }
    view(){
        return this.dirs,this.files
    }
    
  }

class FileSystem extends Directory {
    constructor(){
      this.root = new Directory("/");
    } 
    
}
  
  