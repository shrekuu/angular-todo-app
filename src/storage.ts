class Storage {

    // Keep all the keys here.
    public _todos = `todos`

    public get(key: string): any {
        let value = window.localStorage.getItem(key)
        if (value) {
            return JSON.parse(value)
        }
        return null
    }
    public set(key: string, value: any): void {
        return window.localStorage.setItem(key, JSON.stringify(value))
    }
}

const storage = new Storage()
export default storage