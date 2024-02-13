echo "GET PID"

FIND_PID=$(ps -ef | grep node | grep bin/serve | awk '{print $2}')

echo "FIND_PID: {$FIND_PID}"

sudo kill -9 $FIND_PID
sleep 10

echo "Deploy Project"

cd /var/lib/jenkins/workspace/DearMyFriends_Admin/
nohup serve -s build &

echo "deploy End"