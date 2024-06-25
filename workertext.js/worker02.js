self.onmessage = function(e) {
    const dotnumber = e.data.numPoints;
        function getRandomPoints(numPoints) {
            let points = [];
            for (let i = 0; i < numPoints; i++) {
                let x = Math.random() * 2 - 1; // -1 到 1 之间的随机数
                let y = Math.random() * 2 - 1; // -1 到 1 之间的随机数
                points.push([x, y]);
            }
            console.log(points)
            return points;
        }
        function isInCircle(x, y) {
            return x * x + y * y <= 1;
        }

        // 获取 100 个点并标记颜色
        let points2 = getRandomPoints(dotnumber).map(point => {

            return {
                value: point,
                itemStyle: {
                    color: isInCircle(point[0], point[1]) ? 'red' : 'black'
                }
            };

        });
        self.postMessage(points2);
    }