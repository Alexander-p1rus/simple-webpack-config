type Mode = "production" | "development"

interface PathOptions{
    entry:string,
    output:string,
    html:string
}

export interface BuildOptions {
    mode: Mode,
    path: PathOptions,
    isDev:boolean
}

export interface EnvVariables{
    port?:number
    mode:Mode
}