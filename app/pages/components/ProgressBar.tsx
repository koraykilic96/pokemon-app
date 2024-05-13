'use client'

const ProgressBar = ({percent} : any) => {

    return (
        
        <div className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="h-4 bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: (percent/2)+"%"}}>{percent}</div>
        </div>
    );
};
export default ProgressBar;