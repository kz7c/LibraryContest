import { TimersManager } from 'eternal-timer';

async function main() {
    // By default, timers are stored in '.timers.jsonl' in the project root.
    // Using a .jsonl file enables storing title and description.
    const manager = new TimersManager();

    // Create a timer (5 seconds) with a title and description
    const timerId = await manager.createTimer(5000, 'My Timer', 'This is a test timer.');
    console.log('Timer created:', timerId);

    // Monitor timers (executes when timer expires)
    const interval = manager.checkTimers(async (timer) => {
        console.log('Timer expired:', timer.id, timer.title);
    });

    // Display all timers
    const timers = await manager.showTimers();
    console.log('Active timers:', timers);

    // Remove a timer
    await manager.removeTimer(timerId);
}

main();