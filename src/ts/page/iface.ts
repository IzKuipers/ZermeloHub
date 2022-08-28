export interface Page {
    name:string;
    icon:string;
    accessibility: {
        sideBar: boolean;
        urlParam: boolean;
    };
    content:any;
    params: string[];
}