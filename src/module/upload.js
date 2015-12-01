/**
 *
 * Created by Administrator on 2015/7/17 0017.
 */

function upload (resquest,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("upload handle");
}

exports.upload = upload;