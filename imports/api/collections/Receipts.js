import {FilesCollection} from 'meteor/ostrio:files';
import {Meteor} from 'meteor/meteor';

export const Receipts = new FilesCollection({
    collectionName: 'Receipts',
    allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload: function (file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 1024 * 1024 * 10 && /png|jpe?g/i.test(file.extension)) {
            file.uploadDate = new Date();
            return true;
        }
        return 'Please upload an image, with size equal or less than 10MB';
    }
});
if (Meteor.isClient) {
    Meteor.subscribe('files.images.all');
}

if (Meteor.isServer) {
    Meteor.publish('files.images.all', function () {
        return Receipts.find().cursor;
    });
}

export default Receipts; // import in other files