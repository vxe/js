function cd (dir){
    var HOME = process.env.HOME
    var path_match = /(~\/)(.*)/
    var clean_dir = dir.match(path_match)

    process.chdir(HOME + '/' + clean_dir[2])
}


