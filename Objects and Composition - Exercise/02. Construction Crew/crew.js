function solve(worker) {
    if(worker.dizzinness) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizzinness = false;
    }
    return worker;
}