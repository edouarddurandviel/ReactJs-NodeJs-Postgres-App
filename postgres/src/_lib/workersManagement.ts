interface Worker {
    is: boolean;
    time: number;
};

const workkersManagement = () => {

    const memory = new Map<string, Worker | false>();
    const maxInstances: number = 3;
    const itmeout: number = 300;

    // add to queue
    const createInstance = (instName: string) => {
        let inst: string | any;
        if(memory.size < maxInstances){
            memory.set(instName, {is: true, time: Date.now()});
            return instName;
        }else{
        
            inst = setTimeout(async () => {
                if(memory.size < maxInstances){
                    await createInstance(instName);
                }
            }, itmeout)

            return false;
            
        }
    };

    // remove from queue
    const cancelInstance = (workerName: string) => {
        const hasInstance = memory.has(workerName);
        const wasCancelled = memory.get(workerName);
        if(hasInstance && !wasCancelled){
            memory.set(workerName, false)
        }

        return "worker cancelled"
    };

    // check if at least one is available
    const atLeastOneAvailable = (): string | undefined => {
        if(memory.size === 0) return;

        for (const [key, value] of memory) {
            if(value === false){
                return key 
            }
        }
    }

    const sendRequest = async () => {
        const available = await atLeastOneAvailable(); 
        if(available){
            const created = createInstance(available)
            if(created){
                send(created)
            }
        }
    }

    const send = (inst: string) => {
        return "sent !!!" + inst;
    }

     const check = (inst: string) => {
        return "Not available";
    }



    sendRequest()

}