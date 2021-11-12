"use script";

        let blook = document.getElementById('image');
        let zones = document.querySelectorAll('.ramka');
        blook.addEventListener('dragstart', dragstart);
        blook.addEventListener('dragend', dragend);
        zones.forEach(zona => {
            zona.addEventListener('dragenter', dragenter);
            zona.addEventListener('dragleave', dragleave);
            zona.addEventListener('dragover', dragover);
            zona.addEventListener('drop', dragdrop);
        });
        function dragstart(e) {
            e.target.classList.add('drag-start');
            setTimeout(() => {
                e.target.style.display = 'none';
            }, 0);
        }
        function dragend(e) {
            e.target.classList.remove('drag-start');
            e.target.style.display = "";
        }
        function dragenter(e) {
            e.target.classList.add('drag-enter');
        }
        function dragleave(e) {
            e.target.classList.remove('drag-enter');
        }
        function dragover(e) {
            e.preventDefault();
        }
        function dragdrop(e) {
            e.preventDefault();
            e.target.classList.remove('drag-enter');
            e.target.append(blook);
        }