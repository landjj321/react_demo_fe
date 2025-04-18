rm -rf ~/Desktop/gitfile/react_demo/dist/*   
cp -R ./dist/ ./sub-demo/dist/

echo "----复制成功!---"

cd ./sub-demo

git  add .;
git commit  -m '发布';
git push -u origin master

echo '发布成功~~~'
