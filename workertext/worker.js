self.onmessage = function(e) {
    const dotnumber = e.data.numPoints;
        function getRandomPoints(numPoints) {
            let points = [];
            for (let i = 0; i < numPoints; i++) {
                let x = Math.random() * 2 - 1; // -1 到 1 之间的随机数
                let y = Math.random() * 2 - 1; // -1 到 1 之间的随机数
                points.push([x, y]);
            }
            // console.log(points)
            return points;
        }
        function isInCircle(x, y) {
            return x * x + y * y <= 1;
        }

        const countColors = (points) => {
            let redCount = 0;
            let blackCount = 0;

            points.forEach(point => {
                if (point.itemStyle.color === 'red') {
                    redCount++;
                } else if (point.itemStyle.color === 'black') {
                    blackCount++;
                }
            });

            return { red: redCount, black: blackCount };
        };
        let GetRandomPoints = getRandomPoints(dotnumber)
        // 获取 100 个点并标记颜色
        let points1 = GetRandomPoints.map(point => {

            return {
                value: point,
                itemStyle: {
                    color: isInCircle(point[0], point[1]) ? 'red' : 'black'
                }
            };

        });
        let colorcount = countColors(points1)
        self.postMessage({coordinate:points1 , red:colorcount.red , black:colorcount.black});
    }