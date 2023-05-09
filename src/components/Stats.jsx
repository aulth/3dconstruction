import React, { useEffect } from 'react'

const Stats = ({data}) => {
    useEffect(() => {
        if (typeof window != undefined) {
            const myElement = document.querySelector('#stats');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Element is in the window view
                        let employee = document.querySelector('#employee')
                        let completed = document.querySelector('#completed')
                        let ongoing = document.querySelector('#ongoing')
                        updateNumber(employee, 600, 15);
                        updateNumber(completed, data.completed, 1);
                        updateNumber(ongoing, data.ongoing, 1);
                    } else {
                        // Element is not in the window view
                    }
                });
            });

            observer.observe(myElement);
        }
    }, [])
    function updateNumber(element, targetNumber, increment) {
        let currentNumber = 0;
        function update() {
          currentNumber += increment;
          if (currentNumber <= targetNumber) {
            element.textContent = currentNumber;
            window.requestAnimationFrame(update);
          }
        }
        update();
      }
    return (
        <div className="container mx-auto py-6" id='stats'>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 ">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Total Employees</h2>
                    <p className="text-5xl font-bold text-center" id='employee'>50</p>
                </div>
                <div className="p-6 ">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Completed Projects</h2>
                    <p className="text-5xl font-bold   text-center" id='completed'>100</p>
                </div>
                <div className="p-6 ">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Ongoing Projects</h2>
                    <p className="text-5xl font-bold   text-center" id='ongoing'>25</p>
                </div>
            </div>
        </div>

    )
}

export default Stats